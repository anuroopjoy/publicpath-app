import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { Loader } from './loader.interface';
import { LoaderService } from './loader.service';

@Directive({
  selector: '[appLazyLoader]',
})
export class LazyLoaderDirective implements OnChanges {
  @Input() appLazyLoader!: Loader;
  constructor(
    private container: ViewContainerRef,
    private loader: LoaderService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['appLazyLoader'].currentValue) {
      return;
    }
    const { loader } = this.appLazyLoader;
    this.loader.loadComponent({
      loader,
      container: this.container,
    });
  }
}
