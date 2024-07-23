import { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;

import { sp } from "@pnp/sp";
import * as XLSX from "xlsx";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { WebPartContext } from "@microsoft/sp-webpart-base";

// Ensure PnPjs is configured properly
sp.setup({
  spfxContext: this.context as WebPartContext,
});

private async onButtonClick() {
  // Create a file input element
  const fileInput = document.createElement('input');
  fileInput.type = 'file';

  // Trigger the file dialog
  fileInput.click();

  // Handle file selection
  fileInput.onchange = async (event) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const file = files[0];
      const data = await this.readExcelFile(file);

      if (data) {
        await this.updateSharePointList(data);
        console.log('SharePoint list updated successfully');
      }
    }
  };
}

private readExcelFile(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      resolve(json);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsBinaryString(file);
  });
}

private async updateSharePointList(data: any[]) {
  const listTitle = "History"; // Ensure this matches your list title exactly
  const list = sp.web.lists.getByTitle(listTitle);
  const batch = sp.web.createBatch();
  const fieldNames = await this.getSharePointListFieldNames(list);

  for (const item of data) {
    try {
      // Format the item fields dynamically to match SharePoint list fields
      const formattedItem = this.formatItemForSharePoint(item, fieldNames);

      // Log the item being processed for debugging purposes
      console.log('Processing item:', formattedItem);

      // Check if item exists
      const existingItem = await list.items.filter(`ID eq ${item.ID}`).get();
      
      if (existingItem.length > 0) {
        // Item exists, update it
        list.items.getById(existingItem[0].Id).inBatch(batch).update(formattedItem)
          .then(() => {
            console.log('Item updated successfully');
          })
          .catch((error) => {
            console.error('Error updating item in SharePoint list', error.message);
            console.error('Error details:', JSON.stringify(error));
          });
      } else {
        // Item does not exist, add it
        list.items.inBatch(batch).add(formattedItem)
          .then(() => {
            console.log('Item added successfully');
          })
          .catch((error) => {
            console.error('Error adding item to SharePoint list', error.message);
            console.error('Error details:', JSON.stringify(error));
          });
      }
    } catch (error) {
      console.error('Error preparing item for SharePoint list', error.message);
      console.error('Error details:', JSON.stringify(error));
    }
  }

  await batch.execute();
}

private formatItemForSharePoint(item: any, fieldNames: string[]): any {
  const formattedItem: any = {};
  for (const key in item) {
    if (item.hasOwnProperty(key) && fieldNames.includes(key)) {
      formattedItem[key] = item[key];
    }
  }
  return formattedItem;
}

private async getSharePointListFieldNames(list: any): Promise<string[]> {
  const fields = await list.fields();
  return fields
    .filter(field => !field.Hidden)
    .map(field => field.InternalName);
}

