# react-for-my-beginners

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-for-my-beginners)


# Innert Style in Tag of Html
`
  style={{color: 'red', marginTop: '10px'}}
`

###      NOTED    
exact used to solve the problem on route
Switch used to switch another route to another

### The way that we can pass props into route
#### 1 way (Not Good approach):
`
  component={() => (
    <ListContact
      contacts={contacts}
      getContactId={removeContactHandler}
    />
  )}
`
#### 2 way (Good approach):
`
render={props => (
  <ListContact
    {...props}
    contacts={contacts}
    getContactId={removeContactHandler}
  />
)}
`