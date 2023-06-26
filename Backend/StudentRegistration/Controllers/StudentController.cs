using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentRegistration.Models;
using Newtonsoft.Json;
using StudentRegistration.Migrations;

namespace StudentRegistration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly StudentDbContext _studentDbContext;
      
        public StudentController(StudentDbContext studentDbContext)
        {
            _studentDbContext = studentDbContext;
        }

        [HttpGet]
        [Route("GetStudent")]
        public async Task<IEnumerable<Student>> GetStudents()
        {
            return await _studentDbContext.Student.ToListAsync();
        }

        [HttpPost("AddStudent")]
        //[Route("AddStudent")]
        public async Task<IActionResult> AddStudent([FromBody] Student objStudent)
        {
            if (objStudent == null)
                return BadRequest();

            await _studentDbContext.Student.AddAsync(objStudent);
            await _studentDbContext.SaveChangesAsync();

            return new JsonResult("Added Successfully");
            //return Ok(new
            //{
            //    Message = "student data Added Successfully!"
            //});
        }
        //[HttpPost]
        //[Route("AddStudent")]
        //public async Task<Student> AddStudent(Student objStudent)
        //{
        //    _studentDbContext.Student.Add(objStudent);
        //    await _studentDbContext.SaveChangesAsync();
        //    return objStudent;
        //}



        //[HttpPut]
        //[Route("UpdateStudent/{id}")]
        //public async Task<Student> UpdateStudent(Student objStudent)
        //{
        //    _studentDbContext.Entry(objStudent).State = EntityState.Modified;

        //    await _studentDbContext.SaveChangesAsync();
        //     return objStudent;

        [HttpPut]
        [Route("UpdateStudent/{id}")]
        public async Task<Student> UpdateStudent(Student objStudent)
        {

            _studentDbContext.Entry(objStudent).State = EntityState.Modified;
            await _studentDbContext.SaveChangesAsync();
            return objStudent;

            //return new JsonResult("Added Successfully");


        }


        //return 
        //{
        //    Message = "student data Added Successfully!"
        //}
        //[HttpPut]
        //[Route("UpdateStudent/{id}")]
        //public async Task<Student> UpdateStudent(int id)
        //{
        //    var Student = await _studentDbContext.Student.FindAsync(id);

        //    if (Student == null)
        //    {
        //        // Handle the case where the student with the given ID is not found
        //        throw new Exception("Student not found");
        //    }

        //    Student.id = student.id;
        //    Student.stname = student.stname;
        //    Student.course = student.course;

        //    await _studentDbContext.SaveChangesAsync();
        //    return Student;
        //}

        [HttpDelete]
        [Route("DeleteStudent/{id}")]
        public bool DeleteStudent(int id)
        {
            bool a = false;
            var student = _studentDbContext.Student.Find(id);
            if (student != null)
            {
                a = true;
                _studentDbContext.Entry(student).State = EntityState.Deleted;
                _studentDbContext.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;

        }

    }

}