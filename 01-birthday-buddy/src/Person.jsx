const Person = ({ image, name, age }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;



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

  for (const item of data) {
    try {
      // Log the item being added for debugging purposes
      console.log('Adding item:', item);

      // Format the item fields as needed to match SharePoint list fields
      const formattedItem = this.formatItemForSharePoint(item);
      console.log('Formatted item:', formattedItem);

      await list.items.add(formattedItem);

      console.log('Item added successfully');
    } catch (error) {
      console.error('Error adding item to SharePoint list', error.message);
      console.error('Error details:', JSON.stringify(error));
    }
  }
}

private formatItemForSharePoint(item: any): any {
  // Format the item object to match the SharePoint list field names
  // Example:
  return {
    Title: item.Title,
    // Map more fields as necessary
  };
}
