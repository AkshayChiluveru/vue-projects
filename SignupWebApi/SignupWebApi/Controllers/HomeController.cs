using Microsoft.AspNetCore.Mvc;
using SignupWebApi.Models;
using System.Diagnostics;

namespace SignupWebApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            Signup obj = new Signup();
            return View(obj);
        }
        [HttpPost]
        public ActionResult Index(Signup objuserlogin)
        {
            var display = Userloginvalues().Where(m => m.UserName == objuserlogin.UserName && m.UserPassword == objuserlogin.UserPassword).FirstOrDefault();
            if (display != null)
            {
                ViewBag.Status = "CORRECT UserName,UserEmail and Password";
            }
            else
            {
                ViewBag.Status = "INCORRECT UserName,UserEmail or Password";
            }
            return View(objuserlogin);
        }
        public List<Signup> Userloginvalues()
        {
            List<Signup> objModel = new List<Signup>();
            objModel.Add(new Signup { UserName = "user1", UserEmail = "User1@123.com", UserPassword = "password1" });
            objModel.Add(new Signup { UserName = "user2", UserEmail = "User2@123.com", UserPassword = "password2" });
            objModel.Add(new Signup { UserName = "user3", UserEmail = "User3@123.com", UserPassword = "password3" });
            objModel.Add(new Signup { UserName = "user4", UserEmail = "User4@123.com", UserPassword = "password4" });
            objModel.Add(new Signup { UserName = "user5", UserEmail = "User6@123.com", UserPassword = "password5" });
            return objModel;
        }
    }
}