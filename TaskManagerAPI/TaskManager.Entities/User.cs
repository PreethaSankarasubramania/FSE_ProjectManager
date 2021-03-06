﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManager.Entities
{
    [Table("Users")]
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int EmployeeId { get; set; }

        [ForeignKey("ProjectId")]
        public virtual Project Project { get; set; }
        public int? ProjectId { get; set; }
        
        [ForeignKey("TaskId")]
        public virtual Task Task { get; set; }
        public int? TaskId { get; set; }
    }
}
