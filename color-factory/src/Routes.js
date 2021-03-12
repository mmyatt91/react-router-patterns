import React, { useState } from 'react';
import { Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';

function Routes() {
  const primaryColors = {
    Red: "#FF0000",
    Blue: "#0000FF",
    Green: "#00FF00"
  }

  const [colors, updateColors] = useState(primaryColors);

  function handleAddColor(newColorObj) {
    updateColors(prevColors => ({...prevColors, ...newColorObj }));
  }

  function showCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <ColorDetails {...props} hex={hex} color={color} />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={handleAddColor} />
        </Route>
        <Route path="/colors/:color" render={showCurrentColor} >
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
};


export default Routes;
