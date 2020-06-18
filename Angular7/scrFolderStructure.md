.
├── app
│   ├── app.component.html    => define the final layout of webpage, most time, use the declared component
│   ├── app.component.ts      => main component ts file; will import from app.
│   ├── app.module.ts         => import and declare all other components that will be used in the application
│   ├── payment-details       => define the class of component, which is named payment-details
│   │   ├── payment-detail    => define the actual component
│   │   │   ├── payment-detail.component.html  => define what the component will look like
│   │   │   └── payment-detail.component.ts    => define available functions of the component 
│   │   ├── payment-detail-list  => define the actual component 
│   │   │   ├── payment-detail-list.component.html => define what the component will look like
│   │   │   └── payment-detail-list.component.ts   => define available functions of the component 
│   │   ├── payment-details.component.html     => define what the payment-details component will look like, which contain another two
│   │   └── payment-details.component.ts       => define available functions of the payment-details component
│   └── shared 				=> you can declare some shared subject here such as model subject, which will be used for other file
│       ├── payment-detail.model.ts       => define the model object
│       └── payment-detail.service.ts     => connect to net(or other language) backend; and define the behavior of model (i.e. CRUD)
├── assets
├── browserslist
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html        => call the app-root tag, which is defined at app.component.ts
├── karma.conf.js  
├── main.ts
├── polyfills.ts
├── styles.css
├── test.ts
├── tsconfig.app.json
├── tsconfig.spec.json
└── tslint.json

7 directories, 24 files
