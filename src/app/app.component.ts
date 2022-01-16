import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

//   form2 = new FormGroup({});
//   model2: any = {};
//   options: FormlyFormOptions = {};
//   fields2: FormlyFieldConfig[] = [
//     {
//       key: 'Select',
//       type: 'select',
//       templateOptions: {
//         label: 'Select',
//         placeholder: 'Placeholder',
//         description: 'Description',
//         required: true,
//         options: [
//           { value: 1, label: 'Option 1' },
//           { value: 2, label: 'Option 2'  },
//           { value: 3, label: 'Option 3'  },
//           { value: 4, label: 'Option 4', disabled: true },
//         ],
//       },
//     },
//     {
//       key: 'select_multi',
//       type: 'select',
//       templateOptions: {
//         label: 'Select Multiple',
//         placeholder: 'Placeholder',
//         description: 'Description',
//         required: true,
//         multiple: true,
//         selectAllOption: 'Select All',
//         options: [
//           { value: 1, label: 'Option 1' },
//           { value: 2, label: 'Option 2'  },
//           { value: 3, label: 'Option 3'  },
//           { value: 4, label: 'Option 4', disabled: true },
//         ],
//       },
//     },
//   ];













//   form = new FormGroup({});
//   model = { email: 'email@gmail.com' };
//   fields: FormlyFieldConfig[] = [
//     {
//       key: 'email',
//       type: 'input',
//       templateOptions: {
//         label: 'Email address',
//         placeholder: 'Enter email',
//         required: true,
//       }
//     }
//   ];

//   onSubmit(model: any) {
//     console.log(model);
//   }
// }
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
      placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',
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