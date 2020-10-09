import $ from 'jquery';
import 'jquery-csv';

$.ajax({
  type: 'GET',
  url: './item.csv',
  dataType: 'text',
  success: function (res) {
    const obj = $.csv.toObjects(res);
    console.log(obj);
  },
  error: function (err) {
    console.error(err);
  },
});
