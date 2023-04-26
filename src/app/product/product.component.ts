import { Component, OnInit } from '@angular/core';
import { ProductdetailsService } from '../services/productdetails.service';
import * as widgetSdk from "@mxenabled/web-widget-sdk"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productlist: any[] = [];




  constructor(private productdetails: ProductdetailsService) {

  }

  ngOnInit(): void {
    this.productdetails.getallProduct().subscribe((data: any) => {
      this.productlist = data;
      const widget = new widgetSdk.ConnectWidget({
        container: "#connect-widget",
        url: "https://int-widgets.moneydesktop.com/md/connect/6yl8j6m8rz7Ap7m130lbdn7g73Z27Ahj4d12vxj5ywy6fm2zvwpwv90xc344787cnlsAh3cxw8g2fshwygvycvdx3x1rsmgyvpmk6sz1mfb6s6w4nAd7gjjkzA366hxgxv64cllzbxtqnfzqtcnv34vw6gzzlssjlg9pkkhp8v3w31rjkkpcx6x468A7mbwwc7lhn4Agbvhp4b950rr1h7tkxjtk1417rvwbtpdg4f3y5cgwl4tvjjwzf5th0klqdm1gmAnwgl53dmryh89znl0gxz32jkmzrsfsyby96y91g0jjq77z2spdff7dfzyv3A8z0vvsvmgb0kcxdllhfpl6vgpxnp7pAqtj0qp9/eyJ1aV9tZXNzYWdlX3ZlcnNpb24iOjQsInVpX21lc3NhZ2Vfd2Vidmlld191cmxfc2NoZW1lIjoibXgiLCJjb2xvcl9zY2hlbWUiOiJsaWdodCIsImlzX21vYmlsZV93ZWJ2aWV3IjpmYWxzZSwiY2xpZW50X3JlZGlyZWN0X3VybCI6Imh0dHBzOi8vbXguY29tIiwiY3VycmVudF9pbnN0aXR1dGlvbl9jb2RlIjoiY2hhc2UiLCJjdXJyZW50X2luc3RpdHV0aW9uX2d1aWQiOiJJTlMtZjFhMzI4NWQtZTg1NS1iNjFmLTZhYTctOGFlNTc1YzBlMGU5IiwiY3VycmVudF9tZW1iZXJfZ3VpZCI6Ik1CUi03YzZmMzYxYi1lNTgyLTE1YjYtNjBjMC0zNThmMTI0NjZiNGIiLCJkaXNhYmxlX2JhY2tncm91bmRfYWdnIjpmYWxzZSwiZGlzYWJsZV9pbnN0aXR1dGlvbl9zZWFyY2giOmZhbHNlLCJpbmNsdWRlX2lkZW50aXR5IjpmYWxzZSwiaW5jbHVkZV90cmFuc2FjdGlvbnMiOnRydWUsIm1vZGUiOiJhZ2dyZWdhdGlvbiIsIm9hdXRoX3JlZmVycmFsX3NvdXJjZSI6IkJST1dTRVIiLCJ1cGRhdGVfY3JlZGVudGlhbHMiOmZhbHNlLCJsb2NhbGUiOiJlbi1VUyJ9"
        // additional widget options
      })

    })
  }

}




