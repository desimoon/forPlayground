module.exports = plop => {
  plop.setHelper('myIf', function(isModule, options) {
    if (isModule) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'choose between a functional component and a class component',
        default: 'function',
        choices: [
          { name: 'Function Component', value: 'function' },
          { name: 'Class Component', value: 'class' },
        ],
      },
      {
        type: 'list',
        name: 'cssType',
        message: 'Choose between css and scss style',
        default: 'scss',
        choices: [
          { name: 'css', value: 'css' },
          { name: 'scss (remember to install node sass)', value: 'scss' },
        ],
      },
      {
        type: 'confirm',
        name: 'module',
        message: 'Do you want a module?',
        default: false,
      },
    ],
    actions: data => {
      const componentType =
        data.componentType === 'function'
          ? 'Component.function.js.hbs'
          : 'Component.class.js.hbs';

      const isCssModule = data.module ? '.module' : '';

      const cssType =
        data.cssType === 'scss' ? `${isCssModule}.scss` : `${isCssModule}.css`;

      return [
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
          // Handlebars template used to generate content of new file
          templateFile: `plop-templates/component/${componentType}`,
        },
        {
          type: 'add',
          path: `src/components/{{pascalCase name}}/{{pascalCase name}}${cssType}`,
          templateFile: `plop-templates/component/Component${cssType}.hbs`,
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/index.js',
          templateFile: 'plop-templates/component/index.js.hbs',
        },
        {
          // Adds an index.js file if it does not already exist
          type: 'add',
          path: 'src/components/index.js',
          templateFile: 'plop-templates/injectable-index.js.hbs',
          // If index.js already exists in this location, skip this action
          skipIfExists: true,
        },
        {
          // Action type 'append' injects a template into an existing file
          type: 'append',
          path: 'src/components/index.js',
          // Pattern tells plop where in the file to inject the template
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
        },
        {
          type: 'append',
          path: 'src/components/index.js',
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase name}},`,
        },
      ];
    },
  });
};
