// import './calendar.scss'
// import React from 'react'
// import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
// import { extend } from '@syncfusion/ej2-base'
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
// import PropertyPane from './property-pane'
// import * as dataSource from './datasource.json'

// export default props => {

//   const data = extend([], dataSource.scheduleData, null, true)

//   function change(args) {
//     console.log(args)
//   }

//   function onDragStart(args) {
//     args.navigation.enable = true
//   }

//   return (

//     <div className='schedule-control-section'>
//       <div className='col-lg-9 control-section'>
//         <div className='control-wrapper'>
//           <ScheduleComponent
//             height='650px'
//             selectedDate={new Date()}
//             eventSettings={{ dataSource: data }}
//             dragStart={(onDragStart.bind(this))}
//           >
//             <ViewsDirective>
//               <ViewDirective option='Day' />
//               <ViewDirective option='Week' />
//               <ViewDirective option='WorkWeek' />
//               <ViewDirective option='Month' />
//               <ViewDirective option='Agenda' />
//             </ViewsDirective>
//             <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
//           </ScheduleComponent>
//         </div>
//       </div>

//       <div className='col-lg-3 property-section'>
//         <PropertyPane title='Properties'>
//           <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
//             <tbody>
//               <tr style={{ height: '50px' }}>
//                 <td style={{ width: '30%' }}>
//                   <div className='col-md-4' style={{ paddingTop: '8px' }}>Current Date</div>
//                 </td>
//                 <td style={{ width: '70%' }}>
//                   <div className='datepicker-control-section'>
//                     <DatePickerComponent
//                       value={new Date()}
//                       showClearButton={false}
//                       onClick={(val) => change(val)}
//                     />
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </PropertyPane>
//       </div>
//     </div>

//   )

// }

import React from 'react'
import Cal from './Cal'

const Calendar = () => <Cal />

export default Calendar
