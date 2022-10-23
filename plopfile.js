module.exports = (plop) => {
    // plop.setGenerator('component', {
    //     description: 'New stand alone React component',
    //     prompts: [
    //         {
    //             type: 'input',
    //             name: 'name',
    //             message: 'Please enter the component name'
    //         }
    //     ],
    //     actions: [
    //         {
    //             type: 'add',
    //             path: 'src/components/{{name}}/{{name}}.tsx',
    //             templateFile: 'src/components/templates/component.hbs'
    //         }
    //     ]
    // });
    plop.setGenerator('block', {
        description: 'New CMS React Block',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the block name'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.tsx',
                templateFile: 'src/components/templates/component.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/builder.ts',
                templateFile: 'src/components/templates/builder.hbs'
            },
            {
                type: 'add',
                path: 'src/html/components/{{dashCase name}}.html',
                templateFile: 'src/components/templates/html.hbs'
            }
        ]
    });
};
