package app;

import org.junit.jupiter.api.Test;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AppTest {

    @Test
    void testValidInput() {
        String input = "4\n1 4\n2 5\n3 6\n4 7\n";
        ByteArrayInputStream in = new ByteArrayInputStream(input.getBytes());
        System.setIn(in);

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        System.setOut(new PrintStream(out));

        App.main(new String[]{});

        String expectedOutput = "0\n2\n0\n4\n";
        assertEquals(expectedOutput, out.toString());
    }

    @Test
    void testInvalidInput() {
        String input = "1\nabc 3\n";
        System.setIn(new ByteArrayInputStream(input.getBytes()));

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        System.setOut(new PrintStream(out));

        App.main(new String[]{});

        String output = out.toString();
        assert(output.contains("Error: Invalid test case"));
    }
}
