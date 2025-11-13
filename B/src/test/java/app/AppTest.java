package app;

import org.junit.jupiter.api.Test;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AppTest {

    @Test
    void testValidInput() {
        String input = "6\n2\n4\n6\n10\n14\n20\n";
        ByteArrayInputStream in = new ByteArrayInputStream(input.getBytes());
        System.setIn(in);

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        System.setOut(new PrintStream(out));

        App.main(new String[]{});

        String expectedOutput = "-1\n1 1\n1 1\n2 2\n3 3\n4 5\n";
        assertEquals(expectedOutput, out.toString());
    }

    @Test
    void testInvalidInput() {
        String input = "2\nabc\n10\n";
        System.setIn(new ByteArrayInputStream(input.getBytes()));

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        System.setOut(new PrintStream(out));

        App.main(new String[]{});

        String output = out.toString();
        assert(output.contains("Error: Invalid test case. Please enter one integer."));
    }

    @Test
    void testLargeNumber() {
        String input = "1\n998244353998244352\n";
        System.setIn(new ByteArrayInputStream(input.getBytes()));

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        System.setOut(new PrintStream(out));

        App.main(new String[]{});

        String expectedOutput = "166374058999707392 249561088499561088\n";
        assertEquals(expectedOutput, out.toString());
    }
}
