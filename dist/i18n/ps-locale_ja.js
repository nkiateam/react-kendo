;(function($){
/**
 * ps-locale_en.js
 *
 * version <tt>$ Version: 1.0 $</tt> date:2014/05/25
 * author <a href="mailto:hrahn@nkia.co.kr">Ahn Hyung-Ro</a>
 *
 * example:
 * $ps_locale.validators.passwordErrorMsg
**/
$ps_locale = {locale: 'ko'};
$.extend($ps_locale,{
	ok: 'OK',
	confirm: '確認',
	cancel: 'キャンセル',
	finish: '完了',
	next: '次へ',
	prev: '戻る',
	loading: 'ローディング...',
	apply: '適用',
	direct_select: '手動選択',
	select: '選択してください。',
    autoComplete: '検索ワードを入力してください。',
	sun: '日',
	mon: '月',
	tue: '火',
	wed: '水',
	thu: '木',
	fri: '金',
	sat: '土',
	jan: '1月',
    feb: '2月',
    mar: '3月',
    apr: '4月',
    may: '5月',
    jun: '6月',
    jul: '7月',
    aug: '8月',
    sep: '9月',
    oct: '10月',
    nov: '11月',
    dec: '12月',
    january: '1月',
    february: '2月',
    march: '3月',
    april: '4月',
    june: '6月',
    july: '7月',
    august: '8月',
    september: '9月',
    october: '10月',
    november: '11月',
    december: '12月',
	validators: {
		passwordErrorMsg: '半角英数字、8文字以上にしてください。',
		ipErrorMsg: 'ipアドレスの形式が正しくありません。'
	},
	grid: {
		recordtext: '{0}-{1}/{2}',
		emptyrecords: 'データがありません。',
		loadtext: 'ローディング...',
		pgtext: 'ページ{0} of {1}',
		rowsPerPage: 'ページあたりの行数',
		filter: 'フィルタ',
		reset: '初期化'
	},
	wizard: {
		current: "現在のステップ:",
		pagination: "ページ番号"
	}
});
})(jQuery);
