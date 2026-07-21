'use client'

import { motion } from 'motion/react'
import { useInView } from '@/hooks/useInView'
import { GITHUB_STATS } from '@/lib/constants'
import GlowCard from '@/components/ui/GlowCard'
import { Github, Star, GitBranch, Users, TrendingUp } from 'lucide-react'
import { useMemo } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

function ContributionHeatmap({ isInView }: { isInView: boolean }) {
  const weeks = useMemo(() => {
    return Array.from({ length: 26 }, () =>
      Array.from({ length: 7 }, () => {
        const rand = Math.random()
        if (rand < 0.4) return 0
        if (rand < 0.6) return 1
        if (rand < 0.8) return 2
        if (rand < 0.95) return 3
        return 4
      })
    )
  }, [])

  const colors = ['rgba(255,255,255,0.03)', 'rgba(168,85,247,0.2)', 'rgba(168,85,247,0.4)', 'rgba(168,85,247,0.6)', 'rgba(168,85,247,0.9)']

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px] min-w-fit">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((level, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: wi * 0.01 + di * 0.01, duration: 0.2 }}
                className="w-2.5 h-2.5 rounded-[3px] hover:ring-1 hover:ring-primary/30 transition-all cursor-default"
                style={{ backgroundColor: colors[level] }}
                title={`${level} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GitHubStats() {
  const { ref, isInView } = useInView()

  return (
    <section id="github" className="section-padding relative" aria-labelledby="github-heading">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-primary px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4 tracking-wider">
            06 — GITHUB
          </span>
          <h2 id="github-heading" className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mt-3 mb-4">
            Open Source{' '}
            <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base sm:text-lg">
            My coding activity and contributions on GitHub.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Contribution graph */}
          <motion.div variants={fadeUp} custom={1} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            <GlowCard className="p-5 sm:p-6 rounded-2xl glass border border-white/5" glowColor="#A855F7">
              <div className="flex items-center gap-3 mb-5">
                <Github size={20} className="text-primary" />
                <h3 className="font-semibold text-sm">Contribution Activity</h3>
                <span className="text-[10px] font-mono text-zinc-500 ml-auto">
                  Last 6 months
                </span>
              </div>
              <ContributionHeatmap isInView={isInView} />
              <div className="flex items-center gap-2 mt-4 justify-end">
                <span className="text-[10px] text-zinc-600">Less</span>
                {[0.03, 0.2, 0.4, 0.6, 0.9].map((opacity, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 rounded-[3px]"
                    style={{ backgroundColor: `rgba(168,85,247,${opacity})` }}
                  />
                ))}
                <span className="text-[10px] text-zinc-600">More</span>
              </div>
            </GlowCard>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: <GitBranch size={18} />, value: GITHUB_STATS.totalRepos, label: 'Repositories', color: '#A855F7' },
              { icon: <Star size={18} />, value: GITHUB_STATS.totalStars, label: 'Stars', color: '#FACC15' },
              { icon: <TrendingUp size={18} />, value: GITHUB_STATS.totalCommits, label: 'Commits', color: '#34D399' },
              { icon: <Users size={18} />, value: GITHUB_STATS.followers, label: 'Followers', color: '#22D3EE' },
            ].map((stat) => (
              <GlowCard key={stat.label} className="p-5 rounded-2xl glass border border-white/5 text-center group" glowColor={stat.color}>
                <div
                  className="p-2.5 rounded-xl w-fit mx-auto mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                >
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold font-display">{stat.value}+</p>
                <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-medium">{stat.label}</p>
              </GlowCard>
            ))}
          </motion.div>

          {/* Language usage + Recent repos */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Languages */}
            <motion.div variants={fadeUp} custom={3} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              <GlowCard className="p-5 sm:p-6 rounded-2xl glass border border-white/5 h-full" glowColor="#D946EF">
                <h3 className="font-semibold text-sm mb-5">Language Distribution</h3>
                <div className="space-y-3">
                  {GITHUB_STATS.languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                          <span className="text-xs font-medium text-zinc-300">{lang.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500">{lang.percentage}%</span>
                      </div>
                      <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${lang.percentage}%` } : { width: 0 }}
                          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Recent repos */}
            <motion.div variants={fadeUp} custom={4} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              <GlowCard className="p-5 sm:p-6 rounded-2xl glass border border-white/5 h-full" glowColor="#22D3EE">
                <h3 className="font-semibold text-sm mb-5">Recent Repositories</h3>
                <div className="space-y-3">
                  {GITHUB_STATS.recentRepos.map((repo) => (
                    <a
                      key={repo.name}
                      href={`https://github.com/${GITHUB_STATS.username}/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-xl bg-surface-2/50 border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                            {repo.name}
                          </p>
                          <p className="text-[11px] text-zinc-500 mt-0.5 truncate">
                            {repo.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-3">
                          {repo.stars > 0 && (
                            <span className="flex items-center gap-1 text-[10px] text-yellow-500">
                              <Star size={10} className="fill-yellow-500" />
                              {repo.stars}
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-surface-3">
                            {repo.language}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
