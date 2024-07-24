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


private renderSectionC = () => {
    const { DigiGAMSectionC } = this.state;
    this._allItemsSectionC = DigiGAMSectionC && DigiGAMSectionC.length > 0 && DigiGAMSectionC.map(item => {
        return ({
            SLNo: item["SL.No"],
            PrimaryStatement: item["Primary Statement"],
            CategoryName: item["Category Name"],
            Group: item["Group"], 
            Alias: item["Alias"],
            LeadSheetThreshold: item["Lead Sheet Threshold"],
            ProcessMapThreshold: item["Process Map Threshold"], 
            PreparerMapThreshold: item["Preparer Map Threshold"],
            AccountType: item["Account Type"],
            AccountSubtype: item["Account Sub-type"],
            AccountClass: item["Account Class"],
            AccountSubclass: item["Account Sub-class"],
            GLAccounts: item["GL Accounts"],
            AccountClassALL: item["Account Class (ALL)"],
            AccountSubclassALL: item["Account Sub-class (ALL)"],
            GLAccountsALL: item["GL Accounts (ALL)"],
            ColorIndex: item["Color Index"],
            IFRS: item["IFRS"],
            CommonSelectionThresholds: item["Common Selection Thresholds"], 
            MultipleSubmission: item["Multiple Submission"],
            ActivityAnalysisAboveThreshold: item["Activity Analysis Above Threshold"], 
            QualitiveFactors: item["Qualitive Factors"],
            AccountTypeALL: item["Account Type (ALL)"],
            AccountSubtypeALL: item["Account Subtype (ALL)"],
            ImportGroupName: item["ImportGroupName"],
            ServerGroupName: item["ServerGroupName"],
            Testing: item["Testing"],
            OSJESelection: item["OSJESelection"], 
            S2C: item["S2C"],
            CheckboxValue: item["CheckboxValue"], 
            AnalysisSelection: item["AnalysisSelection"],
            Analysis: item["Analysis"]
        });
    });

    console.log("this._allItemsSectionC >> " + JSON.stringify(this._allItemsSectionC));

    return (
        <React.Fragment>
            <div className={styles.detailListContainer}>
                <DetailsList
                    items={this._allItemsSectionC}
                    columns={this._columnsSectionC}
                    setKey="none"
                    layoutMode={DetailsListLayoutMode.fixedColumns}
                    selectionMode={SelectionMode.none}
                    isHeaderVisible={true}
                    //onItemInvoked={this._onItemInvoked}
                    compact={false}
                    onRenderDetailsHeader={this._onRenderHeaderRow}
                    styles={{
                        root: {
                            backgroundColor: '#2e2e2e !important'
                        },
                        focusZone: {
                            backgroundColor: '#2e2e2e !important'
                        }
                    }}
                />
            </div>
        </React.Fragment>
    );
}

	
