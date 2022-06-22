

function presentStudent(props) {


  return (
    <div className="present-students students-list" >
      <h2>
        Present Student
      </h2>
      <table>
        <tr>
          <th>Student Name</th>
          <th>Action</th>
        </tr>
        {props.students.filter(item => item.isPresent === true).map(student => (
          <tr>
            <td>{student.name}</td>
            <td onClick={() => props.toggleHandler(student.id)}>Absent</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
export default presentStudent;
