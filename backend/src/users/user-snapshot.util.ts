type SnapshotUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

type SnapshotAnalysis = {
  id: string;
  projectType: string;
  city: string;
  district: string | null;
  score: number;
  commercialPriority: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

type DeletionSnapshotOptions = {
  reason?: string | null;
  requestedAt?: Date;
  processedAt?: Date;
  processedByAdminId?: string | null;
  deletedBy: 'user' | 'admin';
  analyses: SnapshotAnalysis[];
};

export function buildAccountDeletionSnapshot(
  user: SnapshotUser,
  options: DeletionSnapshotOptions,
) {
  return {
    schemaVersion: 1,
    identity: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: `${user.firstName} ${user.lastName}`.trim(),
    },
    contact: {
      email: user.email,
      phone: user.phone,
    },
    account: {
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
    deletion: {
      reason: options.reason ?? null,
      requestedAt: options.requestedAt ?? null,
      processedAt: options.processedAt ?? null,
      processedByAdminId: options.processedByAdminId ?? null,
      deletedBy: options.deletedBy,
    },
    analyses: {
      count: options.analyses.length,
      items: options.analyses.map((analysis) => ({
        id: analysis.id,
        projectType: analysis.projectType,
        location: {
          city: analysis.city,
          district: analysis.district,
        },
        score: analysis.score,
        commercialPriority: analysis.commercialPriority,
        status: analysis.status,
        createdAt: analysis.createdAt,
        updatedAt: analysis.updatedAt,
      })),
    },
  };
}
