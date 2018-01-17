import {PipeTransform, Pipe} from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

/* import { Pipe} from "@angular/core";
@Pipe({ name: 'safeHtml'}) 
export class SafeHtmlPipe  {
  transform(value) {
    return value;
  }
} */
