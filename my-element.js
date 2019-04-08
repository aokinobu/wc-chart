import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@google-web-components/google-chart';

class GoogleChart extends PolymerElement {
  static get template() {
    return html`
<style type="text/css">
</style>
 
<iron-ajax auto="" url="https://test.sparqlist.glyconavi.org/api/GlycoSample_Disease_List_chart" handle-as="json" last-response="{{diseaseresultdata}}"></iron-ajax>

<google-chart id="selectionchart" type="pie" rows='[[diseaseresultdata]]' cols='[{"label": "Disease", "type": "string"},{"label": "Count", "type": "number"}]'></google-chart>
`;
  }
  static get properties() {
    return {
      selection: {
        notify: true,
        type: String,
        value: function() {
          return new String();
        }
      },
      diseaseresultdata: {
        notify: true,
        type: Object,
        value: function() {
          return new Object();
        }
      }
    };
  }
  handleClick(e) {
    console.log('click');
  }
  _handleAjaxPostResponse(e) {
    console.log(e);
  }
  _handleAjaxPostError(e) {
    console.log('error: ' + e);
  }
}

customElements.define('wc-chart', GoogleChart);