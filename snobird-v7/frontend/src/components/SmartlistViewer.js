import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchObservations } from "../actions/observations";
import { getObservationsData, getObservationsIsFetching  } from "../selectors";

import { Accordion, AccordionItem } from "carbon-components-react";
import { ListItem } from "carbon-components-react";
import { LoadingIndicator } from "../components";

const SmartlistViewer = () => {
  const dispatch = useDispatch();
  const observationstData = useSelector(getObservationsData);
  const isFetching = useSelector(getObservationsIsFetching);
  const category2 = observationstData.filter((observation) => {
    if(observation.type_cd === 2 || observation.type_cd === "2" ){
      return{
        "id": observation.id,
        "datetime" : observation.datetime,
        "value" : observation.value,
        "patient" : observation.patient,
      };
    };
  })
  const category3 = observationstData.filter((observation) => {
    if(observation.type_cd === 3 || observation.type_cd === "3" ){
      return{
        "id": observation.id,
        "datetime" : observation.datetime,
        "value" : observation.value,
        "patient" : observation.patient,
      };
    };
  })

  useEffect(() => {
    dispatch(fetchObservations());
  }, [dispatch]);

  console.log("Category 3:",category3)

  return (
    <div>
      <h4 style={{textAlign:"center"}}>Smartlist</h4>
        <LoadingIndicator active={isFetching}/>
        <Accordion title = "Smartlist" align='start'>
          {category3.length !== 0 && <AccordionItem className =".bx--accordion__content" title = {`I'm concerned with ${category3.length} observations can you mention that.`}>
            {category3.map((observation, i ) => (
              <ListItem key={observation.id}>
                On {observation.datetime}, {observation.patient} recorded their blood pressure as {observation.value}<br/>
              </ListItem>
            ))}
            
          </AccordionItem>}

          {category2.length !== 0 && <AccordionItem title = {`I'm worried about ${category2.length} observations.`}>
            {category2.map((observation) => (
              <p key={observation.id}>
                On {observation.datetime}, {observation.patient} recorded their blood pressure as {observation.value}
              </p>
            ))}
          </AccordionItem>}

        </Accordion>
    </div>
  );
};

export default SmartlistViewer;