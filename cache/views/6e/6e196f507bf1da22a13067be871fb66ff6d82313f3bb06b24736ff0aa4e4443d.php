<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* login.twig.html */
class __TwigTemplate_3f93b3338bda530b79be449079128238fd842ec39e3c7af091021d17ae1df53b extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "template.twig.html";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("template.twig.html", "login.twig.html", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 4
        echo "
    <div class=\"container\">
        <div class=\"wrapper\">

            <form role=\"form\" method=\"POST\" name=\"login_form\" class=\"form-signing\">
                <h3 class=\"form-signin-heading\">Login</h3>
                <hr class=\"colorgraph\"><hr/>
                <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Correo electrónico\" required=\"\" autofocus=\"\"/>
                <input type=\"password\" class=\"form-control\" name=\"password\" placehoder=\"Password\" required=\"\" />
                <button class=\"btn btn-lg btn-primary btn-block\" name=\"submit\" value=\"Login\" type=\"Submit\">Login</button>
            </form>
            ";
        // line 15
        if (($context["error"] ?? null)) {
            // line 16
            echo "                <div class=\"alert alert-danger\" role=\"alert\">
                    ";
            // line 17
            echo twig_escape_filter($this->env, ($context["error"] ?? null), "html", null, true);
            echo "
                </div>
            ";
        }
        // line 20
        echo "       </div>
    </div>


";
    }

    public function getTemplateName()
    {
        return "login.twig.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  74 => 20,  68 => 17,  65 => 16,  63 => 15,  50 => 4,  46 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "login.twig.html", "C:\\Users\\rachid\\Desktop\\Cursos GEEKHUBS\\blogphp\\templates\\login.twig.html");
    }
}
