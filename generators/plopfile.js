module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "basic component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "please type the name of your new component",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component/[name].tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.ts",
        templateFile: "templates/component/index.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
        templateFile: "templates/component/[name].spec.tsx.hbs",
      },
    ],
  });
  plop.setGenerator("hook", {
    description: "basic hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "please type the name of your new hook",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/hooks/{{camelCase name}}/{{camelCase name}}.spec.ts",
        templateFile: "templates/hook/[name].spec.ts.hbs",
      },
      {
        type: "add",
        path: "../src/hooks/{{camelCase name}}/index.ts",
        templateFile: "templates/hook/index.ts.hbs",
      },
      {
        type: "add",
        path: "../src/hooks/{{camelCase name}}/{{camelCase name}}.ts",
        templateFile: "templates/hook/[name].ts.hbs",
      },
    ],
  });
};
