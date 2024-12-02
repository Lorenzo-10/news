import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/getInfo")
public class UserInfoServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Retrieve IP Address
        String ipAddress = request.getHeader("X-Forwarded-For");
        if (ipAddress == null || ipAddress.isEmpty()) {
            ipAddress = request.getRemoteAddr();
        }

        // Retrieve User-Agent Header (Device and Browser Info)
        String userAgent = request.getHeader("User-Agent");

        // Set Response Content Type
        response.setContentType("text/html");

        // Output IP and Device Info
        response.getWriter().println("<h2>Your IP Address: " + ipAddress + "</h2>");
        response.getWriter().println("<h2>Your Device Info: " + userAgent + "</h2>");
    }
}
