function z_index() {
  Logger.log('z_index');

  Hello_es3_cjs_development_ie8.hello('es3_cjs_development_ie8');
  Hello_es3_cjs_development.hello('es3_cjs_development');
  Hello_es3_cjs_production_ie8.hello('es3_cjs_production_ie8');
  Hello_es3_es2015_development_ie8.hello('es3_es2015_development_ie8');
  Hello_es3_es2015_development.hello('es3_es2015_development');
  Hello_es3_es2015_production_ie8.hello('es3_es2015_production_ie8');
  Hello_es5_cjs_production_ie8.hello('es5_cjs_production_ie8');
  Hello_es5_es2015_development_ie8.hello('es5_es2015_development_ie8');
  Hello_es5_es2015_development.hello('es5_es2015_development');
  Hello_es5_es2015_production_ie8.hello('es5_es2015_production_ie8');

  /* syntax error on `clasp push` (i.e. on save) */
  // Hello_es3_cjs_production.hello('es3_cjs_production');
  // Hello_es3_es2015_production.hello('es3_es2015_production');
  // Hello_es5_cjs_production.hello('es5_cjs_production');
  // Hello_es5_es2015_production.hello('es5_es2015_production');

  /* syntax error on runtime eval */
  // Hello_es5_cjs_development_ie8.hello('es5_cjs_development_ie8');
  // Hello_es5_cjs_development.hello('es5_cjs_development');
}
