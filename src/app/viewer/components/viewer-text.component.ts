import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-viewer-text',
  templateUrl: './viewer-text.component.html',
  styleUrls: ['./viewer-text.component.scss']
})
export class ViewerTextComponent implements OnInit {
  @Input() log: SafeHtml = ``;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    let node = document.createElement('script');
    node.dataset["repo"]="morgrave/xperion"
    node.dataset["issueTerm"]="pathname"
    node.dataset["theme"]="github-light"
    node.dataset["crossorigin"]="anonymous"
    node.src = "https://utteranc.es/client.js";
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByClassName('comment')[0].appendChild(node);
  }

}
