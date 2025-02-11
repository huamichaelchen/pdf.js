/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/* globals expect, it, describe, Dict, Name, Annotation, AnnotationBorderStyle,
           AnnotationBorderStyleType */

'use strict';

describe('Annotation layer', function() {
  describe('Annotation', function() {
    it('should reject a color if it is not an array', function() {
      var dict = new Dict();
      dict.set('Subtype', '');
      var annotation = new Annotation({ dict: dict, ref: 0 });
      annotation.setColor('red');

      expect(annotation.color).toEqual([0, 0, 0]);
    });

    it('should set and get a transparent color', function() {
      var dict = new Dict();
      dict.set('Subtype', '');
      var annotation = new Annotation({ dict: dict, ref: 0 });
      annotation.setColor([]);

      expect(annotation.color).toEqual(null);
    });

    it('should set and get a grayscale color', function() {
      var dict = new Dict();
      dict.set('Subtype', '');
      var annotation = new Annotation({ dict: dict, ref: 0 });
      annotation.setColor([0.4]);

      expect(annotation.color).toEqual([102, 102, 102]);
    });

    it('should set and get an RGB color', function() {
      var dict = new Dict();
      dict.set('Subtype', '');
      var annotation = new Annotation({ dict: dict, ref: 0 });
      annotation.setColor([0, 0, 1]);

      expect(annotation.color).toEqual([0, 0, 255]);
    });

    it('should set and get a CMYK color', function() {
      var dict = new Dict();
      dict.set('Subtype', '');
      var annotation = new Annotation({ dict: dict, ref: 0 });
      annotation.setColor([0.1, 0.92, 0.84, 0.02]);

      expect(annotation.color).toEqual([233, 59, 47]);
    });

    it('should not set and get an invalid color', function() {
      var dict = new Dict();
      dict.set('Subtype', '');
      var annotation = new Annotation({ dict: dict, ref: 0 });
      annotation.setColor([0.4, 0.6]);

      expect(annotation.color).toEqual([0, 0, 0]);
    });
  });

  describe('AnnotationBorderStyle', function() {
    it('should set and get a valid width', function() {
      var borderStyle = new AnnotationBorderStyle();
      borderStyle.setWidth(3);

      expect(borderStyle.width).toEqual(3);
    });

    it('should not set and get an invalid width', function() {
      var borderStyle = new AnnotationBorderStyle();
      borderStyle.setWidth('three');

      expect(borderStyle.width).toEqual(1);
    });

    it('should set and get a valid style', function() {
      var borderStyle = new AnnotationBorderStyle();
      borderStyle.setStyle(Name.get('D'));

      expect(borderStyle.style).toEqual(AnnotationBorderStyleType.DASHED);
    });

    it('should not set and get an invalid style', function() {
      var borderStyle = new AnnotationBorderStyle();
      borderStyle.setStyle('Dashed');

      expect(borderStyle.style).toEqual(AnnotationBorderStyleType.SOLID);
    });

    it('should set and get a valid dash array', function() {
      var borderStyle = new AnnotationBorderStyle();
      borderStyle.setDashArray([1, 2, 3]);

      expect(borderStyle.dashArray).toEqual([1, 2, 3]);
    });

    it('should not set and get an invalid dash array', function() {
      var borderStyle = new AnnotationBorderStyle();
      borderStyle.setDashArray([0, 0]);

      expect(borderStyle.dashArray).toEqual([3]);
    });

    it('should set and get a valid horizontal corner radius', function() {
      var borderStyle = new AnnotationBorderStyle();
      borderStyle.setHorizontalCornerRadius(3);

      expect(borderStyle.horizontalCornerRadius).toEqual(3);
    });

    it('should not set and get an invalid horizontal corner radius',
        function() {
      var borderStyle = new AnnotationBorderStyle();
      borderStyle.setHorizontalCornerRadius('three');

      expect(borderStyle.horizontalCornerRadius).toEqual(0);
    });

    it('should set and get a valid vertical corner radius', function() {
      var borderStyle = new AnnotationBorderStyle();
      borderStyle.setVerticalCornerRadius(3);

      expect(borderStyle.verticalCornerRadius).toEqual(3);
    });

    it('should not set and get an invalid horizontal corner radius',
        function() {
      var borderStyle = new AnnotationBorderStyle();
      borderStyle.setVerticalCornerRadius('three');

      expect(borderStyle.verticalCornerRadius).toEqual(0);
    });
  });
});
