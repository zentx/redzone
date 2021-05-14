import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';



export default function HomePage(props) {
  const currentDate = new Date();
let schedulerData;
if(props.location.state) {

  let sDate = new Date();
  let startHour = 9;
  sDate.setHours(startHour);
  sDate.setMinutes(0);
  let totalHours = parseInt(props.location.state.nHours);
  let eDate = new Date();
  eDate.setHours(startHour + totalHours);
  schedulerData = [
    { startDate: sDate, endDate: eDate, title: props.location.state.tName },
  ];
}


return (
    <Paper>
        <Scheduler
        data={schedulerData}
        >
        <ViewState
            currentDate={currentDate}
        />
        <DayView
            startDayHour={9}
            endDayHour={17}
        />
        <Appointments />
        </Scheduler>
    </Paper>
);

}