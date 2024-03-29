import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Campaigns } from '../../shared/models/campaigns.model';
import { ViewerService } from '../viewer.service';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-viewer-playlog',
  templateUrl: './viewer-playlog.component.html',
  styleUrls: ['./viewer-playlog.component.scss']
})
export class ViewerPlaylogComponent implements OnInit {
  imgareaX = 0;
  imgareaY = 0;
  textareaWidth = '720px';
  textareaLastWidth = 720;
  textareaCurWidth = 720;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private route: ActivatedRoute,
    public viewerService: ViewerService,
    private sanitizer: DomSanitizer,
  ) { }

  async ngOnInit() {
    this.route.params
      .pipe(take(1))
      .subscribe(async (params) => {
        if (!params['title']) {
          this.router.navigate([`/viewer/${Campaigns[0].title}/${Campaigns[0].logs[0].index}`]);
        }
        else if (!params['index']) {
          const title = params['title'];
          this.router.navigate([`/viewer/${title}/${Campaigns[0].logs[0].index}`]);
        }
        else {
          const campaign = Campaigns.find(x => x.title === params['title']);
          const log = params['index'] ? campaign?.logs.find(x => x.index === params['index']) : campaign?.logs[0];
          if (campaign && log) {
            await this.viewerService.loadHtml(campaign, log);
          }
        }
      });
  }

  saveLastPos() {
    const area = document.getElementById('imgarea');
    if (area) {
      this.imgareaX = area.scrollLeft;
      this.imgareaY = area.scrollTop;
    }
  }

  onPan(event) {
    const area = document.getElementById('imgarea');
    if (area) {
      area.scrollLeft = this.imgareaX - event.deltaX;
      area.scrollTop = this.imgareaY - event.deltaY;
    }
  }

  saveLastTextAreaWidth() {
    this.textareaLastWidth = this.textareaCurWidth;
  }

  expandTextArea(event) {
    this.textareaCurWidth = this.textareaLastWidth - event.deltaX;
    this.textareaWidth = `${this.textareaCurWidth}px`;
  }

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  getVideo(src: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }
}
