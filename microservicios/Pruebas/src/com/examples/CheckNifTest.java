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
import org.junit.jupiter.params.provider.EmptySource;
import org.junit.jupiter.params.provider.NullSource;

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
	@DisplayName("Prueba True")
	//@NullSource
	@CsvSource({"70548641M", "1234S", "12345678Z"})
	void testCheckNifTrue(String dni) {
		assertTrue(cNif.checkNif(dni));
		
	}
	@ParameterizedTest
	@DisplayName("Prueba False")
	@EmptySource
	@CsvSource({"12345678P", "''", "12345a", "1a34567z"})
	void testCheckNifFalse(String dni) {
		String dni2 = null;
		assertAll("Pruebas", 
				() -> assertFalse(cNif.checkNif(dni), "Fail pattern"),
				() -> assertThrows(Exception.class,() -> cNif.checkNif(dni2), "Is null")
			);
		
	}

}
