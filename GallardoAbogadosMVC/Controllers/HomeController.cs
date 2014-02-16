using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GallardoAbogadosMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Who()
        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Tendremos el gusto de atenderles en:";

            return View();
        }

        public ActionResult Where()
        {
            return View();
        }
    }
}