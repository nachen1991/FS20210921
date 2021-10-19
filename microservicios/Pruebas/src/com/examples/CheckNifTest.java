package com.examples;

import static org.hamcrest.CoreMatchers.nullValue;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class CheckNifTest {
	CheckNif cNif;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		cNif = new CheckNif();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@ParameterizedTest
	@DisplayName("Prueba 1")
	@CsvSource({"70548641M", "82228644X", "12345678Z"})
	void testCheckNif1(String dni) {
		assertTrue(cNif.checkNif(dni));
		
	}
	@ParameterizedTest
	@DisplayName("Prueba 2")
	@CsvSource({"12345678P", "''", "12345a"})
	void testCheckNif2(String dni) {
		String dni2 = null;
		assertAll("Pruebas 2", 
				() -> assertFalse(cNif.checkNif(dni)),
				() -> assertThrows(Exception.class,() -> cNif.checkNif(dni2)),
				() -> assertEquals(false, cNif.checkNif(dni))
				
			);
		
	}

}
