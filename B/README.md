# Solum Coding Test

This folder contains the solution for task 2 (CargoCraft Fleet) of the coding test.  
It includes the code written in Java and JUnit tests.

## Running the Code

For simplicity Maven Wrapper was included.
Run the following commands for your operating system to run the program.

> `input.txt` contains the input given to the program. This content can be modified or a custom input file can be used instead.

#### Linux / Mac:

```bash
./mvnw compile
./mvnw exec:java -Dexec.mainClass="app.App" < input.txt
```


### Windows (PowerShell or CMD):

```bash
mvnw.cmd compile
mvnw.cmd exec:java -Dexec.mainClass="app.App" < input.txt
```

## Running tests

Run the following command for your operating system to run the tests.

#### Linux / Mac:

```bash
./mvnw test
```


### Windows (PowerShell or CMD):

```bash
mvnw.cmd test
```

