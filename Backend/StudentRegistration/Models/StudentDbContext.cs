using Microsoft.EntityFrameworkCore;


namespace StudentRegistration.Models
{
    public class StudentDbContext : DbContext
        {
            public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options)
            {
            }
            public DbSet<Student> Student { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer("Data Source=CDUN153-O-SRIMA;Initial Catalog=Practice;Integrated Security=True; TrustServerCertificate =true;");
        }
    }
}

