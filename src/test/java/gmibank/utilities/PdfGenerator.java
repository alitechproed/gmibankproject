package gmibank.utilities;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import gmibank.pojos.US_30_Pojo;
import java.io.FileOutputStream;
import java.util.List;

public class PdfGenerator {

    public static void createTableWithPojo(String filePath, List<US_30_Pojo> allUserPojo) {

        try {
            Document document = new Document();
            PdfWriter.getInstance(document, new FileOutputStream(filePath));
            document.open();

            Image img = Image.getInstance("team_try_catch.png");
            img.setAlignment(1);
            img.setWidthPercentage(100f);
            document.add(img); // ust banner ekle resim

            document.add(new Paragraph(" "));

            Font baslikFont = new Font(Font.FontFamily.COURIER, 15, Font.BOLD);
            Phrase baslik = new Phrase("USER NAME AND ROLE", baslikFont);
            Paragraph para = new Paragraph(baslik);
            para.setAlignment(Element.ALIGN_CENTER);
            document.add(para);

            document.add(new Paragraph(" "+" ")); // bir satir bos birak

            float[] cellWidth = {1f, 1f, 1f}; // cell width
            Font boldFont = new Font(Font.FontFamily.HELVETICA, 11, Font.BOLD);
            PdfPTable table1 = new PdfPTable(cellWidth);
            table1.setWidthPercentage(100f); // table with percentage
            table1.setHorizontalAlignment(Element.ALIGN_LEFT);// alignment

            Phrase userName = new Phrase("FIRST NAME", boldFont);
            Phrase userLastname = new Phrase("LAST NAME", boldFont);
            Phrase userRole = new Phrase("USER ROLE", boldFont);

            table1.addCell(userName);    // header 1
            table1.addCell(userLastname); // header 2
            table1.addCell(userRole); // header 3

            for (int i = 0; i < allUserPojo.size(); i++) {

                for (String w : allUserPojo.get(i).getAuthorities()) {
                    table1.addCell(allUserPojo.get(i).getFirstName());
                    table1.addCell(allUserPojo.get(i).getLastName());
                    table1.addCell(w);
                }

            }
            document.add(table1);

            document.add(new Paragraph(" ")); // bir satir bos birak

            document.close();
        } catch (Exception e) {
            System.err.println(e);
        }
        System.out.println("Pdf file created");
    }

}
