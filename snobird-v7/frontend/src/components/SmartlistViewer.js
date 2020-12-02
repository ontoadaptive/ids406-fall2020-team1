import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSmartlist } from "../actions/smartlist";
import { getSmartlistData, getSmartlistIsFetching } from "../selectors";

import { Accordion, AccordionItem } from "carbon-components-react";

const SmartlistViewer = () => {
  const dispatch = useDispatch();
  const smartlistData = useSelector(getSmartlistData);
  const isFetching = useSelector(getSmartlistIsFetching);

  useEffect(() => {
    dispatch(fetchSmartlist());
  }, [dispatch]);



  return (
    <div>
      <h3>Smartlist</h3>
        <Accordion>{smartlistData.map((category) =>
          { 
            if(category.category <= 2){
              return ( <AccordionItem title={`${category.category === 1 ? "I found ": "I'm concerned with "}` + category.data.length + " observations that you can mention" }>
                {category.data.map((el) => 
                  <p>on {el.datetime} {el.patient} recorded their blood pressure as {el.heart_rate}</p>
                )}
            </AccordionItem>
              )
            }
          },
        )}</Accordion>
    </div>
  );
};

export default SmartlistViewer;