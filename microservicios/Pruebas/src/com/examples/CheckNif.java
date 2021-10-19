package com.examples;

import java.util.regex.Pattern;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane.RestoreAction;

public class CheckNif {

	public boolean checkNif(String nif) {
		boolean result = false;
		Pattern patronPattern = Pattern.compile("[0-9]{7,8}[A-Z a-z]");
		if(patronPattern.matcher(nif).matches()) {
			String letterValue = nif.substring(nif.length() - 1);
			String numberValue = nif.substring(0, nif.length() -1);
			int resto = Integer.parseInt(numberValue) % 23;

			result = Character.toUpperCase(letterValue.charAt(0)) == "TRWAGMYFPDXBNJZSQVHLCKE".charAt(resto);
			
		} else {
			result = false;
		}
		return result;
		 
	}
}



