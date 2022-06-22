import {useEffect} from 'react'

function allStudent(props) {
  const editHandler = (studentId) => {
    props.setIsEditable(true);
    const student = props.students.find((item) => item.id === studentId);
    props.setEditableStudent(student);
    props.setStudentName(student.name)
  }

  const deleteHandler = (studentId) => {
    const newStudentList = props.students.filter((student) => student.id !== studentId);
    props.setStudents(newStudentList)
  };

  const presentHandler = (studentId) => {
    const student = props.students.find((item) => item.id === studentId);
    if (student.isPresent === undefined) {
      student.isPresent = true;
      props.setStudents([...props.students])
    } else if (student.isPresent === true) {
      alert("The student is already in the Present List")
    } else {
      alert("The student is already in the Absent List")
    }
  }
 
  const absentHandler = (studentId) => {
    const student = props.students.find((item) => item.id === studentId);
    if (student.isPresent === undefined) {
      student.isPresent = false;
      props.setStudents([...props.students])
    } else if (student.isPresent === false) {
      alert("The student is already in the Absent List")
    } else {
      alert("The student is already in the Present List")
    }
  }
   let count = props.students.length;
  return (
    <div className="all-students students-list" >
      <div className='heading'>
      <h3>All Students </h3>
      <h3>Total Students {count}</h3>
      </div>
      <table>
        <tr>
          <th>Student Name</th>
          <th colSpan= "4">Action</th>
        </tr>
        {props.students.map(student => (
          <tr>
            <td className='student-name'>{student.name}</td>
            <td onClick={() => editHandler(student.id)} className="edit " >Edit</td>
            <td onClick={() => deleteHandler(student.id)} className="delete " >Delete</td>
            <td onClick={() => presentHandler(student.id)} className="present" >Present</td>
            <td onClick={() => absentHandler(student.id)} className="absent"> Absent</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
export default allStudent;