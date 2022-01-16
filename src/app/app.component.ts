import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shit:any=11;
  constructor(private breadcrumbService: BreadcrumbService) {}
form = new FormGroup({});
model: any = {};
options: FormlyFormOptions = {
  formState: {
    awesomeIsForced: false,
  },
};
fields: FormlyFieldConfig[] = [
  {
    key: 'text',
    type: 'input',
    templateOptions: {
      label: 'Text',
      placeholder: 'Formly is terrific!',
      required: true,
    },
  },
  {
    key: 'nested.story',
    type: 'textarea',
    templateOptions: {
      label: 'Some sweet story',
      placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript',
      description: '',
    },
    expressionProperties: {
      focus: 'formState.awesomeIsForced',
      'templateOptions.description': (model, formState) => {
        if (formState.awesomeIsForced) {
          return 'And look! This field magically got focus!';
        }else {return console.log('lol')}
      },
    },
  },
  {
    key: 'awesome',
    type: 'checkbox',
    templateOptions: { label: '' },
    expressionProperties: {
      'templateOptions.disabled': 'formState.awesomeIsForced',
      'templateOptions.label': (model, formState) => {
        if (formState.awesomeIsForced) {
          return 'Too bad, formly is really awesome...';
        } else {
          return 'Is formly totally awesome? (uncheck this and see what happens)';
        }
      },
    },
  },
  {
    key: 'whyNot',
    type: 'textarea',
    expressionProperties: {
      'templateOptions.placeholder': (model, formState) => {
        if (formState.awesomeIsForced) {
          return 'Too bad... It really is awesome! Wasn\'t that cool?';
        } else {
          return 'Type in here... I dare you';
        }
      },
      'templateOptions.disabled': 'formState.awesomeIsForced',
    },
    hideExpression: 'model.awesome',
    templateOptions: {
      label: 'Why Not?',
      placeholder: 'Type in here... I dare you',
    },
  },
  {
    key: 'custom',
    type: 'custom',
    templateOptions: {
      label: 'Custom inlined',
    },
  },
];

submit() {
  if (this.form.valid) {
    alert(JSON.stringify(this.model));
  }
}
}