const MOTES = [18, 22]

module.exports = function NoMoteCancel(mod) {
	let job = -1

	mod.hook('S_LOGIN', mod.patchVersion < 81 ? 12 : 13, event => { job = event.templateId % 100 - 1 })
	mod.hook('C_CANCEL_SKILL', 3, event => job === 7 && MOTES.includes(Math.floor(event.skill.id / 10000)) ? false : undefined)
}