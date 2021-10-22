package com.example.exceptions;

public class NotFoundException extends Exception {

	private static final long serialVersionUID = 1L;
	final static String MESSAGE_STRING = "Duplicate key";
	public NotFoundException() {
		super("Duplicate key");
		
	}

	public NotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		
	}
	public NotFoundException(String message, Throwable cause) {
		super(message, cause);
		
	}

	public NotFoundException(String message) {
		super(message);
		
	}

	public NotFoundException(Throwable cause) {
		super(MESSAGE_STRING, cause);
		
	}

}
