import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function DcApp() {
    return (
    <DocumentEditorContainerComponent id="container" style={{ 'height': '690px' }}  enableToolbar={true}/>);
}
export default DcApp;
// serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"