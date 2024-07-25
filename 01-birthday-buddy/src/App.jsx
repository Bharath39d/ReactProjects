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

private async updateHistorySharePointList(data: any[]) {
  const listTitle = "History";
  const list = sp.web.lists.getByTitle(listTitle);
  const batch = sp.web.createBatch();
  const fieldNames = await this.getSharePointListFieldNames(list);

  // Prepare all update requests first
  const updatePromises = data.map(async (item) => {
    try {
      const formattedItem = this.formatItemForSharePoint(item, fieldNames);
      const existingItem = await list.items.filter(`ID eq ${item.ID}`).get();
      
      if (existingItem.length > 0) {
        list.items.getById(item.ID).inBatch(batch).update(formattedItem);
      }
    } catch (error) {
      console.error('Error preparing item for SharePoint list', error.message);
      console.error('Error details:', JSON.stringify(error));
    }
  });

  // Wait for all update requests to be prepared
  await Promise.all(updatePromises);

  try {
    // Execute the batch update
    await batch.execute();
    console.log('Batch update successful');
  } catch (error) {
    console.error('Error executing batch update', error.message);
    console.error('Error details:', JSON.stringify(error));
  }
}

