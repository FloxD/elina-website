
class ScheduleEntry{
  day: number;
  timeComment : string;
  dateTime:string;
  isGoingToStream: boolean;
  comment: string;

  constructor(){
    this.day=0;
    this.timeComment="";
    this.dateTime = "";
    this.isGoingToStream=true;
    this.comment="";
  }
}
export default ScheduleEntry;