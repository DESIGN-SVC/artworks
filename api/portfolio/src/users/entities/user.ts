import { Role } from '@roles/entities/roles'
import { Exclude, Expose } from 'class-transformer'
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('users')
export class User {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    @Exclude()
    password: string

    @Column()
    isAdmin: boolean

    @Column()
    avatar_url?: string

    @Column()
    theme?: string

    @Column()
    team: string

    @ManyToOne(() => Role, {
        cascade: true,
    })
    role: Role

    @CreateDateColumn()
    created_at: Date

    @Expose({ name: 'avatar_url' })
    getAvatarUrl(): string | null {
        if (!this.avatar_url) return null        
        return `${process.env.API_URL}/files/${this.avatar_url}`
    }

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}
