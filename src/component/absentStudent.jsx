
function absentStudent(props) {


  return (
    <div className="absent-students students-list" >
      <h2>
        Absent Student
      </h2>
      <table>
        <tr>
          <th>Student Name</th>
          <th>Action</th>
        </tr>
        {props.students.filter(item => item.isPresent === false).map(student => (
          <tr>
            <td>{student.name}</td>
            <td onClick={() => props.toggleHandler(student.id)} >Present</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default absentStudent;