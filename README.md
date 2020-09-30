<h2> 🔥 Eisenhower Matrix</h2>

### Description

The application show really easy Eisenhower Matrix. Thanks for this matrix people can plan their tasks. In this Matrix there are four areas: Urgent and important, Important but not urgent, Urgent but not important, Neither urgent nor important.
Thanks for DnD library the tasks can change their place (just do drag and drop).

### :eyes: Technologies

Languages and frameworks:

- TypeScript
- React
- Material UI
- DnD library
- Formik library
- Yup library
- date-fns
- uuid
- Jest
- React-testing-library

### :see_no_evil: Code

- In the tree there are components, Context, typings, utils and View folders. The application consist of many little components, thanks for it the code is clear and better. In the typing folder there are enums type so when we use it we reduce the risk of mistake. In the utils folder there are special palette so the styles are in one place. In the project there is one (example) test - Tag test which use jest and React testing library

- Responsive web design
  This application looks like really good in mobile, tablet and desktop

* Yup library

```javascript
const validationSchema = Yup.object().shape({
  taskName: Yup.string().required().label('Task Name'),
  comment: Yup.string().label('comment'),
  tag: Yup.string().label('tag'),
});
```

- DnD library

```javascript
const [, drop] = useDrop({
  accept: 'task',
  drop: ({ title, from }: any) => {
    moveTask(title, from, categoryName);
  },
});
```

- Create reusable components

```javascript
export const Button = (props: ButtonProps) => {
  const classes = useStylesButton();
  return <MuiButton className={classes.button} {...props} />;
};
```

- Use Material UI Library

```javascript
export const useStylesForm = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      padding: theme.spacing(0, 2, 0, 2),
    },
  },
  main: {
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
  },

```

- Use enums type

````javascript
export enum Categories {
  urgentAndImportant = 'urgentAndImportant',
  importantNotUrgent = 'importantNotUrgent',
  urgentAndNotImportant = 'urgentAndNotImportant',
  neitherUrgentNotImportant = 'neitherUrgentNotImportant',
}```
````

- Tests

```javascript
test('renders component', async () => {
  const { getByText } = render(<Tag label="text" />);

  expect(getByText('text')).toBeInTheDocument();
});
```

### 💻 Installation

To run this project, install it locally using :

```
$ cd ../lorem
$ npm install
$ npm start
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```

### 💻 Run test

To run this test :

```
$ cd ../lorem
$ npm test
```

### :couple: Contribute

If you want add or change something feel free to create the issues and discuss about it with me

### :ear: Contact

All information about me you can find on my home page on the github

