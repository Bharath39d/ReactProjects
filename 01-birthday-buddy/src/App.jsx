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



 this._columnsSectionC = [
          {
            key: 'column1',
            name: 'SL.No',
            fieldName: 'SLNo',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column2',
            name: 'Primary Statement',
            fieldName: 'PrimaryStatement',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column3',
            name: 'Category Name',
            fieldName: 'CategoryName',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column4',
            name: 'Group',
            fieldName: 'Group',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column5',
            name: 'Alias',
            fieldName: 'Alias',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column6',
            name: 'Lead Sheet Threshold',
            fieldName: 'LeadSheetThreshold',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column7',
            name: 'Process Map Threshold',
            fieldName: 'ProcessMapThreshold',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column8',
            name: 'Preparer Map Threshold',
            fieldName: 'PreparerMapThreshold',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column9',
            name: 'Account Type',
            fieldName: 'AccountType',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column10',
            name: 'Account Sub-type',
            fieldName: 'AccountSubtype',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column11',
            name: 'Account Class',
            fieldName: 'AccountClass',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column12',
            name: 'Account Sub-class',
            fieldName: 'AccountSubclass',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column13',
            name: 'GL Accounts',
            fieldName: 'GLAccounts',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column14',
            name: 'Account Class ALL',
            fieldName: 'AccountClassALL',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column15',
            name: 'Account Sub-class ALL',
            fieldName: 'AccountSubclassALL',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column16',
            name: 'GL Accounts ALL',
            fieldName: 'GLAccountsALL',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column17',
            name: 'Color Index',
            fieldName: 'ColorIndex',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column18',
            name: 'IFRS',
            fieldName: 'IFRS',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column19',
            name: 'Common Selection Thresholds',
            fieldName: 'CommonSelectionThresholds',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column20',
            name: 'Multiple Submission',
            fieldName: 'MultipleSubmission',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column21',
            name: 'Activity Analysis Above Threshold',
            fieldName: 'ActivityAnalysisAboveThreshold',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column22',
            name: 'Qualitive Factors',
            fieldName: 'QualitiveFactors',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column23',
            name: 'Account Type ALL',
            fieldName: 'AccountTypeALL',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column24',
            name: 'Account Subtype ALL',
            fieldName: 'AccountSubtypeALL',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column25',
            name: 'ImportGroupName',
            fieldName: 'ImportGroupName',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column26',
            name: 'ServerGroupName',
            fieldName: 'ServerGroupName',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column27',
            name: 'Testing',
            fieldName: 'Testing',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column28',
            name: 'OSJESelection',
            fieldName: 'OSJESelection',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column29',
            name: 'S2C',
            fieldName: 'S2C',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column30',
            name: 'CheckboxValue',
            fieldName: 'CheckboxValue',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column31',
            name: 'AnalysisSelection',
            fieldName: 'AnalysisSelection',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          },
          {
            key: 'column32',
            name: 'Analysis',
            fieldName: 'Analysis',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
          }
        ];

export interface IScopingSectionC {
     SLNo :string;
		 PrimaryStatement :  string;
		 CategoryName : string;
		 Group : string; 
		 Alias : string;
		 LeadSheetThreshold : string;
		 ProcessMapThreshold : string; 
		 PreparerMapThreshold :  string;
		 AccountType :string;
		 AccountSubtype :  string;
		 AccountClass :  string;
		 AccountSubclass :  string;
		 GLAccounts :  string;
		 AccountClassALL : string;
		 AccountSubclassALL: string;
		 GLAccountsALL: string;
		 ColorIndex :  string;
		 IFRS : string;
		 CommonSelectionThresholds :string; 
		 MultipleSubmission : string;
		 ActivityAnalysisAboveThreshold :string; 
		 QualitiveFactors :string;
		 AccountTypeALL : string;
		 AccountSubtypeALL : string;
		 ImportGroupName :   string;
		 ServerGroupName : string;
		 Testing : string;
		 OSJESelection :  string; 
		 S2C : string;
		 CheckboxValue :string; 
		 AnalysisSelection : string;
		 Analysis : string;
}
 private renderSectionC = () => {
      const {DigiGAMSectionC,} = this.state;
      this._allItemsSectionC = DigiGAMSectionC && DigiGAMSectionC.length > 0 && DigiGAMSectionC.map(item => {
          return ({
            SLNo :item["SL.No"],
            PrimaryStatement :  item["Primary Statement"],
            CategoryName : item["Category Name"],
            Group : item["Group"], 
            Alias : item["Alias"],
            LeadSheetThreshold : item["Lead Sheet Threshold"],
            ProcessMapThreshold : item["Process Map Threshold"], 
            PreparerMapThreshold :  item["Preparer Map Threshold"],
            AccountType :item["Account Type"],
            AccountSubtype :  item["Account Sub-type"],
            AccountClass :  item["Account Class"],
            AccountSubclass :  item["Account Sub-class"],
            GLAccounts :  item["GL Accounts"],
            AccountClassALL : item["Account Class (ALL)"],
            AccountSubclassALL: item["Account Sub-class (ALL)"],
            GLAccountsALL: item["GL Accounts (ALL)"],
            ColorIndex :  item["Color Index"],
            IFRS : item["IFRS"],
            CommonSelectionThresholds :item["Common Selection Thresholds"], 
            MultipleSubmission : item["Multiple Submission"],
            ActivityAnalysisAboveThreshold :item["Activity Analysis Above Threshold"], 
            QualitiveFactors :item["Qualitive Factors"],
            AccountTypeALL : item["Account Type (ALL"],
            AccountSubtypeALL : item["Account Subtype (ALL)"],
            ImportGroupName :   item["ImportGroupName"],
            ServerGroupName : item["ServerGroupName"],
            Testing : item["Testing"],
            OSJESelection :  item["OSJESelection"], 
            S2C : item["S2C"],
            CheckboxValue :item["CheckboxValue"], 
            AnalysisSelection : item["AnalysisSelection"],
            Analysis : item["Analysis"]
          })
      });

      console.log("this._allItemsSectionC >> "+JSON.stringify(this._allItemsSectionC));

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
                          backgroundColor: '#2e2e38 !important'
                      },
                      focusZone: {
                          backgroundColor: '#2e2e38 !important'
                      }
                  }}
              />       

          </div>         
          </React.Fragment>
      )
  }

[
	{
		 SL.No :  Income Statement ,
		 Primary Statement :  Income Statement ,
		 Category Name :  UA.hx Revenue ,
		 Group :  Group1 ,
		 Alias :  N/A ,
		 Lead Sheet Threshold :  N/A ,
		 Process Map Threshold :  N/A ,
		 Preparer Map Threshold :  N/A ,
		 Account Type :  4 | Revenue ,
		 Account Sub-type :  11 | Sales ,
		 Account Class :  20 | Sales of goods and services ,
		 Account Sub-class :  22 ,
		 GL Accounts :  0120000000 ;0120000010 ;0120000020 ;0120000030 ;0120000040 ;0120000050 ;0120000100 ;0120000200 ;0120000300 ;0120000330 ;0120000400 ;0120000420 ;0120000430 ;0120004000 ;0120008000 ;0120010000 ;0120010010 ;0120010020 ;0120010030 ;0120010040 ;0120300050 ;0120300060 ;0120300070 ;0120300080 ;0120300200  ,
		 Account Class (ALL) :  11 | Sales ,
		 Account Sub-class (ALL) :  ALL ,
		 GL Accounts (ALL) :  ALL ,
		 Color Index :  19 ,
		 IFRS :  N/A ,
		 Common Selection Thresholds :  N/A ,
		 Multiple Submission :  N/A ,
		 Activity Analysis Above Threshold :  N/A ,
		 Qualitive Factors :  N/A ,
		 Account Type (ALL) :  4 | Revenue ,
		 Account Subtype (ALL) :  20 | Sales of goods and services ,
		 ImportGroupName :   ,
		 ServerGroupName :  LcoUTEyUv_R5P ,
		 Testing :   ,
		 OSJESelection :   ,
		 S2C :  Primary ,
		 CheckboxValue :  True ,
		 AnalysisSelection :  Yes ,
		 Analysis :  3WayCorrelation 
	}
]
	
