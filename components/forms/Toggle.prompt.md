44×24 iOS-style switch — green #4CD964 on, #E0E0E0 off. Used for campaign on/off and feature toggles.

```jsx
const [on, setOn] = React.useState(true);
<Toggle checked={on} onChange={setOn} />
```
