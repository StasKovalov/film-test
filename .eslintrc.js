module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        // Can I remove these now?
        "ecmaFeatures": {
            "impliedStrict": true,
            "classes": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jquery": true,
        "jest": true,
        "es6": true
    },
    "rules": {
        "no-debugger": 0,
        "no-alert": 0,
        "no-await-in-loop": 0,
        "no-return-assign": [
            "error",
            "except-parens"
        ],
        "no-restricted-syntax": [
            2,
            "ForInStatement",
            "LabeledStatement",
            "WithStatement"
        ],
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "react/prop-types": 0,
        "react/destructuring-assignment": 0,
        "react/no-access-state-in-setstate": 0,
        "no-restricted-syntax": 0,
        "react/no-unused-state": 0,
        "guard-for-in": 0,
        "no-unused-expressions": 0,
        "no-unused-vars": [
            1,
            {
                "ignoreSiblings": true,
                "argsIgnorePattern": "res|next|^err"
            }
        ],
        "prefer-const": [
            "error",
            {
                "destructuring": "all",
            }
        ],
        "arrow-body-style": [
            2,
            "as-needed"
        ],
        "no-unused-expressions": [
            2,
            {
                "allowTaggedTemplates": true
            }
        ],
        "no-param-reassign": [
            0,
            {
                "props": false
            }
        ],
        "no-use-before-define": ["error", { "functions": false, "classes": true }],
        "no-console": 0,
        "import/prefer-default-export": 0,
        "import": 0,
        "func-names": 0,
        "no-fallthrough": 0,
        "space-before-function-paren": 0,
        "comma-dangle": 0,
        "max-len": 0,
        "import/extensions": 0,
        "no-underscore-dangle": 0,
        "consistent-return": 0,
        "react/display-name": 1,
        "react/no-array-index-key": 0,
        "react/react-in-jsx-scope": 0,
        "react/prefer-stateless-function": 0,
        "react/forbid-prop-types": 0,
        "react/no-unescaped-entities": 0,
        "jsx-a11y/accessible-emoji": 0,
        "react/require-default-props": 0,
        "react/jsx-fragments": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "radix": 0,
        "react/state-in-constructor": 0,
        "import/no-unresolved": 0,
        "react/jsx-props-no-spreading": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-case-declarations": 0,
        "no-shadow": [
            0,
            {
                "hoist": "all",
                "allow": [
                    "resolve",
                    "reject",
                    "done",
                    "next",
                    "err",
                    "error"
                ]
            }
        ],
        "quotes": [
            2,
            "double",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true, "optionalDependencies": false, "peerDependencies": false }],
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": false,
                "printWidth": 80,
            }
        ],
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": [
            "warn",
            {
                "aspects": [
                    "invalidHref"
                ]
            }
        ],
    },
    "plugins": [
        "prettier",
    ],
    "settings": {
        "import/resolver": "webpack"
    },
}