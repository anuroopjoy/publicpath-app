import {
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { LoadChildrenCallback } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor() {}

  loadComponent(args: {
    loader: LoadChildrenCallback;
    container: ViewContainerRef;
  }) {
    return (args.loader() as Promise<any>).then((module) => {
      const component = module.default;
      args.container.createComponent(component);
    });
  }
}
